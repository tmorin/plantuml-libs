# Alphaxiv


```text
simpleicons/A/Alphaxiv
```

```text
include('simpleicons/A/Alphaxiv')
```



| Illustration | Alphaxiv |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Alphaxiv.png) | ![illustration for Alphaxiv](../../simpleicons/A/Alphaxiv.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AlphaxivXs>`
- `<$AlphaxivSm>`
- `<$AlphaxivMd>`
- `<$AlphaxivLg>`





## Alphaxiv

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Alphaxiv
include('simpleicons/A/Alphaxiv')

' renders the element
Alphaxiv('Alphaxiv', 'Alphaxiv', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Alphaxiv
include('simpleicons/A/Alphaxiv')

' renders the element
Alphaxiv('Alphaxiv', 'Alphaxiv', 'an optional tech label', 'an optional description')
@enduml
```

