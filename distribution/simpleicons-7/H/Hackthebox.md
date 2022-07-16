# Hackthebox


```text
simpleicons-7/H/Hackthebox
```

```text
include('simpleicons-7/H/Hackthebox')
```



| Illustration | Hackthebox |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/H/Hackthebox.png) | ![illustration for Hackthebox](../../simpleicons-7/H/Hackthebox.Local.png) |




## Hackthebox

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Hackthebox
include('simpleicons-7/H/Hackthebox')

' renders the element
Hackthebox('Hackthebox', 'Hackthebox', 'an optional tech label')
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

' loads the Item which embeds the element Hackthebox
include('simpleicons-7/H/Hackthebox')

' renders the element
Hackthebox('Hackthebox', 'Hackthebox', 'an optional tech label')
@enduml
```

