# Abbvie


```text
simpleicons-14/A/Abbvie
```

```text
include('simpleicons-14/A/Abbvie')
```



| Illustration | Abbvie |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Abbvie.png) | ![illustration for Abbvie](../../simpleicons-14/A/Abbvie.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AbbvieXs>`
- `<$AbbvieSm>`
- `<$AbbvieMd>`
- `<$AbbvieLg>`





## Abbvie

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Abbvie
include('simpleicons-14/A/Abbvie')

' renders the element
Abbvie('Abbvie', 'Abbvie', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Abbvie
include('simpleicons-14/A/Abbvie')

' renders the element
Abbvie('Abbvie', 'Abbvie', 'an optional tech label', 'an optional description')
@enduml
```

