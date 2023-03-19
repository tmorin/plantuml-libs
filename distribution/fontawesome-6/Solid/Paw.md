# Paw


```text
fontawesome-6/Solid/Paw
```

```text
include('fontawesome-6/Solid/Paw')
```



| Illustration | Paw |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Paw.png) | ![illustration for Paw](../../fontawesome-6/Solid/Paw.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PawXs>`
- `<$PawSm>`
- `<$PawMd>`
- `<$PawLg>`





## Paw

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Paw
include('fontawesome-6/Solid/Paw')

' renders the element
Paw('Paw', 'Paw', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Paw
include('fontawesome-6/Solid/Paw')

' renders the element
Paw('Paw', 'Paw', 'an optional tech label', 'an optional description')
@enduml
```

