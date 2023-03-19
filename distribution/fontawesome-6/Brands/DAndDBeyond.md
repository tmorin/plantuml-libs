# DAndDBeyond


```text
fontawesome-6/Brands/DAndDBeyond
```

```text
include('fontawesome-6/Brands/DAndDBeyond')
```



| Illustration | DAndDBeyond |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/DAndDBeyond.png) | ![illustration for DAndDBeyond](../../fontawesome-6/Brands/DAndDBeyond.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DAndDBeyondXs>`
- `<$DAndDBeyondSm>`
- `<$DAndDBeyondMd>`
- `<$DAndDBeyondLg>`





## DAndDBeyond

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element DAndDBeyond
include('fontawesome-6/Brands/DAndDBeyond')

' renders the element
DAndDBeyond('DAndDBeyond', 'D And D Beyond', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element DAndDBeyond
include('fontawesome-6/Brands/DAndDBeyond')

' renders the element
DAndDBeyond('DAndDBeyond', 'D And D Beyond', 'an optional tech label', 'an optional description')
@enduml
```

