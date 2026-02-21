# Fluke


```text
simpleicons-14/F/Fluke
```

```text
include('simpleicons-14/F/Fluke')
```



| Illustration | Fluke |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/F/Fluke.png) | ![illustration for Fluke](../../simpleicons-14/F/Fluke.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FlukeXs>`
- `<$FlukeSm>`
- `<$FlukeMd>`
- `<$FlukeLg>`





## Fluke

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Fluke
include('simpleicons-14/F/Fluke')

' renders the element
Fluke('Fluke', 'Fluke', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fluke
include('simpleicons-14/F/Fluke')

' renders the element
Fluke('Fluke', 'Fluke', 'an optional tech label', 'an optional description')
@enduml
```

