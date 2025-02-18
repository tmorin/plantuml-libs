# Cairographics


```text
simpleicons-14/C/Cairographics
```

```text
include('simpleicons-14/C/Cairographics')
```



| Illustration | Cairographics |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Cairographics.png) | ![illustration for Cairographics](../../simpleicons-14/C/Cairographics.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CairographicsXs>`
- `<$CairographicsSm>`
- `<$CairographicsMd>`
- `<$CairographicsLg>`





## Cairographics

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Cairographics
include('simpleicons-14/C/Cairographics')

' renders the element
Cairographics('Cairographics', 'Cairographics', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cairographics
include('simpleicons-14/C/Cairographics')

' renders the element
Cairographics('Cairographics', 'Cairographics', 'an optional tech label', 'an optional description')
@enduml
```

