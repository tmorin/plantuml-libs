# HourglassFull


```text
material/Action/HourglassFull
```

```text
include('material/Action/HourglassFull')
```



| Illustration | HourglassFull |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/HourglassFull.png) | ![illustration for HourglassFull](../../material/Action/HourglassFull.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HourglassFullXs>`
- `<$HourglassFullSm>`
- `<$HourglassFullMd>`
- `<$HourglassFullLg>`





## HourglassFull

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element HourglassFull
include('material/Action/HourglassFull')

' renders the element
HourglassFull('HourglassFull', 'Hourglass Full', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element HourglassFull
include('material/Action/HourglassFull')

' renders the element
HourglassFull('HourglassFull', 'Hourglass Full', 'an optional tech label', 'an optional description')
@enduml
```

