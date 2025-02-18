# Emlakjet


```text
simpleicons-14/E/Emlakjet
```

```text
include('simpleicons-14/E/Emlakjet')
```



| Illustration | Emlakjet |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/E/Emlakjet.png) | ![illustration for Emlakjet](../../simpleicons-14/E/Emlakjet.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EmlakjetXs>`
- `<$EmlakjetSm>`
- `<$EmlakjetMd>`
- `<$EmlakjetLg>`





## Emlakjet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Emlakjet
include('simpleicons-14/E/Emlakjet')

' renders the element
Emlakjet('Emlakjet', 'Emlakjet', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Emlakjet
include('simpleicons-14/E/Emlakjet')

' renders the element
Emlakjet('Emlakjet', 'Emlakjet', 'an optional tech label', 'an optional description')
@enduml
```

