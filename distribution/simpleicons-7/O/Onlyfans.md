# Onlyfans


```text
simpleicons-7/O/Onlyfans
```

```text
include('simpleicons-7/O/Onlyfans')
```



| Illustration | Onlyfans |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/O/Onlyfans.png) | ![illustration for Onlyfans](../../simpleicons-7/O/Onlyfans.Local.png) |




## Onlyfans

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Onlyfans
include('simpleicons-7/O/Onlyfans')

' renders the element
Onlyfans('Onlyfans', 'Onlyfans', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Onlyfans
include('simpleicons-7/O/Onlyfans')

' renders the element
Onlyfans('Onlyfans', 'Onlyfans', 'an optional tech label', 'an optional description')
@enduml
```

