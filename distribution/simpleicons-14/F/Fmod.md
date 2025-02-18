# Fmod


```text
simpleicons-14/F/Fmod
```

```text
include('simpleicons-14/F/Fmod')
```



| Illustration | Fmod |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/F/Fmod.png) | ![illustration for Fmod](../../simpleicons-14/F/Fmod.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FmodXs>`
- `<$FmodSm>`
- `<$FmodMd>`
- `<$FmodLg>`





## Fmod

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Fmod
include('simpleicons-14/F/Fmod')

' renders the element
Fmod('Fmod', 'Fmod', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fmod
include('simpleicons-14/F/Fmod')

' renders the element
Fmod('Fmod', 'Fmod', 'an optional tech label', 'an optional description')
@enduml
```

