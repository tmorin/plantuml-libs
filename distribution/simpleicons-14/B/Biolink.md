# Biolink


```text
simpleicons-14/B/Biolink
```

```text
include('simpleicons-14/B/Biolink')
```



| Illustration | Biolink |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/B/Biolink.png) | ![illustration for Biolink](../../simpleicons-14/B/Biolink.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BiolinkXs>`
- `<$BiolinkSm>`
- `<$BiolinkMd>`
- `<$BiolinkLg>`





## Biolink

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Biolink
include('simpleicons-14/B/Biolink')

' renders the element
Biolink('Biolink', 'Biolink', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Biolink
include('simpleicons-14/B/Biolink')

' renders the element
Biolink('Biolink', 'Biolink', 'an optional tech label', 'an optional description')
@enduml
```

