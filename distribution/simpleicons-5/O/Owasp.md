# Owasp


```text
simpleicons-5/O/Owasp
```

```text
include('simpleicons-5/O/Owasp')
```



| Illustration | Owasp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/O/Owasp.png) | ![illustration for Owasp](../../simpleicons-5/O/Owasp.Local.png) |




## Owasp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Owasp
include('simpleicons-5/O/Owasp')

' renders the element
Owasp('Owasp', 'Owasp', 'an optional tech label')
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

' loads the Item which embeds the element Owasp
include('simpleicons-5/O/Owasp')

' renders the element
Owasp('Owasp', 'Owasp', 'an optional tech label')
@enduml
```

