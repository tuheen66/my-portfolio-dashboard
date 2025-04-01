/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { IFormInput, TBlog, TMessage } from "@/utils/Types";
import { getAllProjects } from "@/utils/actions/ProjectService";
import { getAllBlogs } from "@/utils/actions/BlogService";
import { getAllMessage } from "@/utils/actions/MessageService";



const COLORS = ["#FF8042", "#3B3B98", "#B33771"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PieCharts = () => {
  const [projects, setProjects] = useState<IFormInput[]>([]);
  const [blogs, setBlogs] = useState<TBlog[]>([]);
  const [messages, setMessages] = useState<TMessage[]>([]);

  useEffect(() => {
    async function loadProject() {
      const data = await getAllProjects();
      setProjects(data);
    }
    loadProject();
  }, []);

  useEffect(() => {
    async function loadBlogs() {
      const data = await getAllBlogs();
      setBlogs(data);
    }
    loadBlogs();
  }, []);

  useEffect(() => {
    async function loadMessage() {
      const data = await getAllMessage();
      setMessages(data);
    }
    loadMessage();
  }, []);

  const data = [
    { name: "Total Projects", value: projects.length },
    { name: "Total Blogs", value: blogs.length },
    { name: "Total Messages", value: messages.length },
  ];

  return (
    <div className="w-[100%] h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={600} height={400}>
          <Pie
            data={data}
            cx={200}
            cy={200}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        <Legend/>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieCharts;
