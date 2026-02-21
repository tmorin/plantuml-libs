# Fathom


```text
simpleicons/F/Fathom
```

```text
include('simpleicons/F/Fathom')
```



| Illustration | Fathom |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/F/Fathom.png) | ![illustration for Fathom](../../simpleicons/F/Fathom.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FathomXs>`
- `<$FathomSm>`
- `<$FathomMd>`
- `<$FathomLg>`





## Fathom

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Fathom
include('simpleicons/F/Fathom')

' renders the element
Fathom('Fathom', 'Fathom', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fathom
include('simpleicons/F/Fathom')

' renders the element
Fathom('Fathom', 'Fathom', 'an optional tech label', 'an optional description')
@enduml
```

