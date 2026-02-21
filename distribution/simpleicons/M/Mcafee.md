# Mcafee


```text
simpleicons/M/Mcafee
```

```text
include('simpleicons/M/Mcafee')
```



| Illustration | Mcafee |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Mcafee.png) | ![illustration for Mcafee](../../simpleicons/M/Mcafee.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$McafeeXs>`
- `<$McafeeSm>`
- `<$McafeeMd>`
- `<$McafeeLg>`





## Mcafee

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Mcafee
include('simpleicons/M/Mcafee')

' renders the element
Mcafee('Mcafee', 'Mcafee', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Mcafee
include('simpleicons/M/Mcafee')

' renders the element
Mcafee('Mcafee', 'Mcafee', 'an optional tech label', 'an optional description')
@enduml
```

