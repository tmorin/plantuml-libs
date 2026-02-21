# Owasp


```text
simpleicons/O/Owasp
```

```text
include('simpleicons/O/Owasp')
```



| Illustration | Owasp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/O/Owasp.png) | ![illustration for Owasp](../../simpleicons/O/Owasp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OwaspXs>`
- `<$OwaspSm>`
- `<$OwaspMd>`
- `<$OwaspLg>`





## Owasp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Owasp
include('simpleicons/O/Owasp')

' renders the element
Owasp('Owasp', 'Owasp', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Owasp
include('simpleicons/O/Owasp')

' renders the element
Owasp('Owasp', 'Owasp', 'an optional tech label', 'an optional description')
@enduml
```

