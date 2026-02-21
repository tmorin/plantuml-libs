# Aib


```text
simpleicons/A/Aib
```

```text
include('simpleicons/A/Aib')
```



| Illustration | Aib |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Aib.png) | ![illustration for Aib](../../simpleicons/A/Aib.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AibXs>`
- `<$AibSm>`
- `<$AibMd>`
- `<$AibLg>`





## Aib

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Aib
include('simpleicons/A/Aib')

' renders the element
Aib('Aib', 'Aib', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Aib
include('simpleicons/A/Aib')

' renders the element
Aib('Aib', 'Aib', 'an optional tech label', 'an optional description')
@enduml
```

