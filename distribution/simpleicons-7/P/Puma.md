# Puma


```text
simpleicons-7/P/Puma
```

```text
include('simpleicons-7/P/Puma')
```



| Illustration | Puma |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/P/Puma.png) | ![illustration for Puma](../../simpleicons-7/P/Puma.Local.png) |




## Puma

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Puma
include('simpleicons-7/P/Puma')

' renders the element
Puma('Puma', 'Puma', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Puma
include('simpleicons-7/P/Puma')

' renders the element
Puma('Puma', 'Puma', 'an optional tech label', 'an optional description')
@enduml
```

