# Gofundme


```text
simpleicons/G/Gofundme
```

```text
include('simpleicons/G/Gofundme')
```



| Illustration | Gofundme |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Gofundme.png) | ![illustration for Gofundme](../../simpleicons/G/Gofundme.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GofundmeXs>`
- `<$GofundmeSm>`
- `<$GofundmeMd>`
- `<$GofundmeLg>`





## Gofundme

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Gofundme
include('simpleicons/G/Gofundme')

' renders the element
Gofundme('Gofundme', 'Gofundme', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gofundme
include('simpleicons/G/Gofundme')

' renders the element
Gofundme('Gofundme', 'Gofundme', 'an optional tech label', 'an optional description')
@enduml
```

