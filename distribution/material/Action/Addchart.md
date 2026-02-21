# Addchart


```text
material/Action/Addchart
```

```text
include('material/Action/Addchart')
```



| Illustration | Addchart |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/Addchart.png) | ![illustration for Addchart](../../material/Action/Addchart.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AddchartXs>`
- `<$AddchartSm>`
- `<$AddchartMd>`
- `<$AddchartLg>`





## Addchart

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Addchart
include('material/Action/Addchart')

' renders the element
Addchart('Addchart', 'Addchart', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Addchart
include('material/Action/Addchart')

' renders the element
Addchart('Addchart', 'Addchart', 'an optional tech label', 'an optional description')
@enduml
```

