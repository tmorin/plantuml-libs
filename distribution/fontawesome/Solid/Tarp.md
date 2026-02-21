# Tarp


```text
fontawesome/Solid/Tarp
```

```text
include('fontawesome/Solid/Tarp')
```



| Illustration | Tarp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Tarp.png) | ![illustration for Tarp](../../fontawesome/Solid/Tarp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TarpXs>`
- `<$TarpSm>`
- `<$TarpMd>`
- `<$TarpLg>`





## Tarp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Tarp
include('fontawesome/Solid/Tarp')

' renders the element
Tarp('Tarp', 'Tarp', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tarp
include('fontawesome/Solid/Tarp')

' renders the element
Tarp('Tarp', 'Tarp', 'an optional tech label', 'an optional description')
@enduml
```

