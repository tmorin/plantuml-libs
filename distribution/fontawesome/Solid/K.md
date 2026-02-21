# K


```text
fontawesome/Solid/K
```

```text
include('fontawesome/Solid/K')
```



| Illustration | K |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/K.png) | ![illustration for K](../../fontawesome/Solid/K.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KXs>`
- `<$KSm>`
- `<$KMd>`
- `<$KLg>`





## K

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element K
include('fontawesome/Solid/K')

' renders the element
K('K', 'K', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element K
include('fontawesome/Solid/K')

' renders the element
K('K', 'K', 'an optional tech label', 'an optional description')
@enduml
```

