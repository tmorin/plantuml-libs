# Slashdot


```text
simpleicons-14/S/Slashdot
```

```text
include('simpleicons-14/S/Slashdot')
```



| Illustration | Slashdot |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Slashdot.png) | ![illustration for Slashdot](../../simpleicons-14/S/Slashdot.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SlashdotXs>`
- `<$SlashdotSm>`
- `<$SlashdotMd>`
- `<$SlashdotLg>`





## Slashdot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Slashdot
include('simpleicons-14/S/Slashdot')

' renders the element
Slashdot('Slashdot', 'Slashdot', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Slashdot
include('simpleicons-14/S/Slashdot')

' renders the element
Slashdot('Slashdot', 'Slashdot', 'an optional tech label', 'an optional description')
@enduml
```

