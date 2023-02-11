# Uptimekuma


```text
simpleicons-8/U/Uptimekuma
```

```text
include('simpleicons-8/U/Uptimekuma')
```



| Illustration | Uptimekuma |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/U/Uptimekuma.png) | ![illustration for Uptimekuma](../../simpleicons-8/U/Uptimekuma.Local.png) |




## Uptimekuma

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Uptimekuma
include('simpleicons-8/U/Uptimekuma')

' renders the element
Uptimekuma('Uptimekuma', 'Uptimekuma', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Uptimekuma
include('simpleicons-8/U/Uptimekuma')

' renders the element
Uptimekuma('Uptimekuma', 'Uptimekuma', 'an optional tech label', 'an optional description')
@enduml
```

