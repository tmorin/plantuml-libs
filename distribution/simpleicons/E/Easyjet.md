# Easyjet


```text
simpleicons/E/Easyjet
```

```text
include('simpleicons/E/Easyjet')
```



| Illustration | Easyjet |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/E/Easyjet.png) | ![illustration for Easyjet](../../simpleicons/E/Easyjet.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EasyjetXs>`
- `<$EasyjetSm>`
- `<$EasyjetMd>`
- `<$EasyjetLg>`





## Easyjet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Easyjet
include('simpleicons/E/Easyjet')

' renders the element
Easyjet('Easyjet', 'Easyjet', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Easyjet
include('simpleicons/E/Easyjet')

' renders the element
Easyjet('Easyjet', 'Easyjet', 'an optional tech label', 'an optional description')
@enduml
```

