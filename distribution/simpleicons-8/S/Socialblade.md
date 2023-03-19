# Socialblade


```text
simpleicons-8/S/Socialblade
```

```text
include('simpleicons-8/S/Socialblade')
```



| Illustration | Socialblade |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Socialblade.png) | ![illustration for Socialblade](../../simpleicons-8/S/Socialblade.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SocialbladeXs>`
- `<$SocialbladeSm>`
- `<$SocialbladeMd>`
- `<$SocialbladeLg>`





## Socialblade

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Socialblade
include('simpleicons-8/S/Socialblade')

' renders the element
Socialblade('Socialblade', 'Socialblade', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Socialblade
include('simpleicons-8/S/Socialblade')

' renders the element
Socialblade('Socialblade', 'Socialblade', 'an optional tech label', 'an optional description')
@enduml
```

