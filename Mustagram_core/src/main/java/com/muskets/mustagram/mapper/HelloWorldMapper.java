package com.muskets.mustagram.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
@Mapper
public interface HelloWorldMapper {

    void insertTest(Map<String, String> paramMap);
    List<Map<String, Object>> selectTest();
}
