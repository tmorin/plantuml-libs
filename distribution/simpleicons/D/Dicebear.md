# Dicebear


```text
simpleicons/D/Dicebear
```

```text
include('simpleicons/D/Dicebear')
```



| Illustration | Dicebear |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/D/Dicebear.png) | ![illustration for Dicebear](../../simpleicons/D/Dicebear.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DicebearXs>`
- `<$DicebearSm>`
- `<$DicebearMd>`
- `<$DicebearLg>`





## Dicebear

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Dicebear
include('simpleicons/D/Dicebear')

' renders the element
Dicebear('Dicebear', 'Dicebear', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dicebear
include('simpleicons/D/Dicebear')

' renders the element
Dicebear('Dicebear', 'Dicebear', 'an optional tech label', 'an optional description')
@enduml
```

