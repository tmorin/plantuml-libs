# Anichart


```text
simpleicons-14/A/Anichart
```

```text
include('simpleicons-14/A/Anichart')
```



| Illustration | Anichart |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Anichart.png) | ![illustration for Anichart](../../simpleicons-14/A/Anichart.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AnichartXs>`
- `<$AnichartSm>`
- `<$AnichartMd>`
- `<$AnichartLg>`





## Anichart

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Anichart
include('simpleicons-14/A/Anichart')

' renders the element
Anichart('Anichart', 'Anichart', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Anichart
include('simpleicons-14/A/Anichart')

' renders the element
Anichart('Anichart', 'Anichart', 'an optional tech label', 'an optional description')
@enduml
```

