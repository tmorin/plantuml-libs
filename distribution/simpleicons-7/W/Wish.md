# Wish


```text
simpleicons-7/W/Wish
```

```text
include('simpleicons-7/W/Wish')
```



| Illustration | Wish |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/W/Wish.png) | ![illustration for Wish](../../simpleicons-7/W/Wish.Local.png) |




## Wish

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Wish
include('simpleicons-7/W/Wish')

' renders the element
Wish('Wish', 'Wish', 'an optional tech label', 'an optional description')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Wish
include('simpleicons-7/W/Wish')

' renders the element
Wish('Wish', 'Wish', 'an optional tech label', 'an optional description')
@enduml
```

