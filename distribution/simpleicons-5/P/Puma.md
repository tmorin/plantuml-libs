# Puma


```text
simpleicons-5/P/Puma
```

```text
include('simpleicons-5/P/Puma')
```



| Illustration | Puma |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Puma.png) | ![illustration for Puma](../../simpleicons-5/P/Puma.Local.png) |




## Puma

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Puma
include('simpleicons-5/P/Puma')

' renders the element
Puma('Puma', 'Puma', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Puma
include('simpleicons-5/P/Puma')

' renders the element
Puma('Puma', 'Puma', 'an optional tech label')
@enduml
```

