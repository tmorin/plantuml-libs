# Deaf


```text
fontawesome/Solid/Deaf
```

```text
include('fontawesome/Solid/Deaf')
```



| Illustration | Deaf |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Deaf.png) | ![illustration for Deaf](../../fontawesome/Solid/Deaf.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DeafXs>`
- `<$DeafSm>`
- `<$DeafMd>`
- `<$DeafLg>`





## Deaf

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Deaf
include('fontawesome/Solid/Deaf')

' renders the element
Deaf('Deaf', 'Deaf', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Deaf
include('fontawesome/Solid/Deaf')

' renders the element
Deaf('Deaf', 'Deaf', 'an optional tech label', 'an optional description')
@enduml
```

