# Jxl


```text
fontawesome/Brands/Jxl
```

```text
include('fontawesome/Brands/Jxl')
```



| Illustration | Jxl |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Jxl.png) | ![illustration for Jxl](../../fontawesome/Brands/Jxl.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$JxlXs>`
- `<$JxlSm>`
- `<$JxlMd>`
- `<$JxlLg>`





## Jxl

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Jxl
include('fontawesome/Brands/Jxl')

' renders the element
Jxl('Jxl', 'Jxl', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Jxl
include('fontawesome/Brands/Jxl')

' renders the element
Jxl('Jxl', 'Jxl', 'an optional tech label', 'an optional description')
@enduml
```

