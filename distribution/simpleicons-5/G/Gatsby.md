# Gatsby


```text
simpleicons-5/G/Gatsby
```

```text
include('simpleicons-5/G/Gatsby')
```



| Illustration | Gatsby |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/G/Gatsby.png) | ![illustration for Gatsby](../../simpleicons-5/G/Gatsby.Local.png) |




## Gatsby

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Gatsby
include('simpleicons-5/G/Gatsby')

' renders the element
Gatsby('Gatsby', 'Gatsby', 'an optional tech label')
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

' loads the Item which embeds the element Gatsby
include('simpleicons-5/G/Gatsby')

' renders the element
Gatsby('Gatsby', 'Gatsby', 'an optional tech label')
@enduml
```

