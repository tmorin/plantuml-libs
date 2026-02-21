# Wc


```text
material/Notification/Wc
```

```text
include('material/Notification/Wc')
```



| Illustration | Wc |
| :---: | :---: |
| ![illustration for Illustration](../../material/Notification/Wc.png) | ![illustration for Wc](../../material/Notification/Wc.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WcXs>`
- `<$WcSm>`
- `<$WcMd>`
- `<$WcLg>`





## Wc

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Wc
include('material/Notification/Wc')

' renders the element
Wc('Wc', 'Wc', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element Wc
include('material/Notification/Wc')

' renders the element
Wc('Wc', 'Wc', 'an optional tech label', 'an optional description')
@enduml
```

