# Eac


```text
simpleicons/E/Eac
```

```text
include('simpleicons/E/Eac')
```



| Illustration | Eac |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/E/Eac.png) | ![illustration for Eac](../../simpleicons/E/Eac.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EacXs>`
- `<$EacSm>`
- `<$EacMd>`
- `<$EacLg>`





## Eac

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Eac
include('simpleicons/E/Eac')

' renders the element
Eac('Eac', 'Eac', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Eac
include('simpleicons/E/Eac')

' renders the element
Eac('Eac', 'Eac', 'an optional tech label', 'an optional description')
@enduml
```

