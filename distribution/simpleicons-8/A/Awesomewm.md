# Awesomewm


```text
simpleicons-8/A/Awesomewm
```

```text
include('simpleicons-8/A/Awesomewm')
```



| Illustration | Awesomewm |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/A/Awesomewm.png) | ![illustration for Awesomewm](../../simpleicons-8/A/Awesomewm.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwesomewmXs>`
- `<$AwesomewmSm>`
- `<$AwesomewmMd>`
- `<$AwesomewmLg>`





## Awesomewm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Awesomewm
include('simpleicons-8/A/Awesomewm')

' renders the element
Awesomewm('Awesomewm', 'Awesomewm', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Awesomewm
include('simpleicons-8/A/Awesomewm')

' renders the element
Awesomewm('Awesomewm', 'Awesomewm', 'an optional tech label', 'an optional description')
@enduml
```

