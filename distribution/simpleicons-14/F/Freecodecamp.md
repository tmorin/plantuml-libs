# Freecodecamp


```text
simpleicons-14/F/Freecodecamp
```

```text
include('simpleicons-14/F/Freecodecamp')
```



| Illustration | Freecodecamp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/F/Freecodecamp.png) | ![illustration for Freecodecamp](../../simpleicons-14/F/Freecodecamp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FreecodecampXs>`
- `<$FreecodecampSm>`
- `<$FreecodecampMd>`
- `<$FreecodecampLg>`





## Freecodecamp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Freecodecamp
include('simpleicons-14/F/Freecodecamp')

' renders the element
Freecodecamp('Freecodecamp', 'Freecodecamp', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Freecodecamp
include('simpleicons-14/F/Freecodecamp')

' renders the element
Freecodecamp('Freecodecamp', 'Freecodecamp', 'an optional tech label', 'an optional description')
@enduml
```

