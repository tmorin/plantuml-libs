# Wemo


```text
simpleicons-8/W/Wemo
```

```text
include('simpleicons-8/W/Wemo')
```



| Illustration | Wemo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/W/Wemo.png) | ![illustration for Wemo](../../simpleicons-8/W/Wemo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WemoXs>`
- `<$WemoSm>`
- `<$WemoMd>`
- `<$WemoLg>`





## Wemo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Wemo
include('simpleicons-8/W/Wemo')

' renders the element
Wemo('Wemo', 'Wemo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Wemo
include('simpleicons-8/W/Wemo')

' renders the element
Wemo('Wemo', 'Wemo', 'an optional tech label', 'an optional description')
@enduml
```

