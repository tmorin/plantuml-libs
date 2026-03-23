# Ils


```text
fontawesome/Solid/Ils
```

```text
include('fontawesome/Solid/Ils')
```



| Illustration | Ils |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Ils.png) | ![illustration for Ils](../../fontawesome/Solid/Ils.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$IlsXs>`
- `<$IlsSm>`
- `<$IlsMd>`
- `<$IlsLg>`





## Ils

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Ils
include('fontawesome/Solid/Ils')

' renders the element
Ils('Ils', 'Ils', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ils
include('fontawesome/Solid/Ils')

' renders the element
Ils('Ils', 'Ils', 'an optional tech label', 'an optional description')
@enduml
```

