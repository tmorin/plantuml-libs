# Frontify


```text
simpleicons/F/Frontify
```

```text
include('simpleicons/F/Frontify')
```



| Illustration | Frontify |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/F/Frontify.png) | ![illustration for Frontify](../../simpleicons/F/Frontify.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FrontifyXs>`
- `<$FrontifySm>`
- `<$FrontifyMd>`
- `<$FrontifyLg>`





## Frontify

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Frontify
include('simpleicons/F/Frontify')

' renders the element
Frontify('Frontify', 'Frontify', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Frontify
include('simpleicons/F/Frontify')

' renders the element
Frontify('Frontify', 'Frontify', 'an optional tech label', 'an optional description')
@enduml
```

