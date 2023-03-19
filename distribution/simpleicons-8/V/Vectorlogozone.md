# Vectorlogozone


```text
simpleicons-8/V/Vectorlogozone
```

```text
include('simpleicons-8/V/Vectorlogozone')
```



| Illustration | Vectorlogozone |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/V/Vectorlogozone.png) | ![illustration for Vectorlogozone](../../simpleicons-8/V/Vectorlogozone.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VectorlogozoneXs>`
- `<$VectorlogozoneSm>`
- `<$VectorlogozoneMd>`
- `<$VectorlogozoneLg>`





## Vectorlogozone

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Vectorlogozone
include('simpleicons-8/V/Vectorlogozone')

' renders the element
Vectorlogozone('Vectorlogozone', 'Vectorlogozone', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Vectorlogozone
include('simpleicons-8/V/Vectorlogozone')

' renders the element
Vectorlogozone('Vectorlogozone', 'Vectorlogozone', 'an optional tech label', 'an optional description')
@enduml
```

