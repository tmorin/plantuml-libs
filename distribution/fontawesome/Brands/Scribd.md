# Scribd


```text
fontawesome/Brands/Scribd
```

```text
include('fontawesome/Brands/Scribd')
```



| Illustration | Scribd |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Scribd.png) | ![illustration for Scribd](../../fontawesome/Brands/Scribd.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ScribdXs>`
- `<$ScribdSm>`
- `<$ScribdMd>`
- `<$ScribdLg>`





## Scribd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Scribd
include('fontawesome/Brands/Scribd')

' renders the element
Scribd('Scribd', 'Scribd', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Scribd
include('fontawesome/Brands/Scribd')

' renders the element
Scribd('Scribd', 'Scribd', 'an optional tech label', 'an optional description')
@enduml
```

