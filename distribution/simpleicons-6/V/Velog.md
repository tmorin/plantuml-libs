# Velog


```text
simpleicons-6/V/Velog
```

```text
include('simpleicons-6/V/Velog')
```



| Illustration | Velog |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/V/Velog.png) | ![illustration for Velog](../../simpleicons-6/V/Velog.Local.png) |




## Velog

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Velog
include('simpleicons-6/V/Velog')

' renders the element
Velog('Velog', 'Velog', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Velog
include('simpleicons-6/V/Velog')

' renders the element
Velog('Velog', 'Velog', 'an optional tech label')
@enduml
```

