# Appian


```text
simpleicons-8/A/Appian
```

```text
include('simpleicons-8/A/Appian')
```



| Illustration | Appian |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/A/Appian.png) | ![illustration for Appian](../../simpleicons-8/A/Appian.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AppianXs>`
- `<$AppianSm>`
- `<$AppianMd>`
- `<$AppianLg>`





## Appian

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Appian
include('simpleicons-8/A/Appian')

' renders the element
Appian('Appian', 'Appian', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Appian
include('simpleicons-8/A/Appian')

' renders the element
Appian('Appian', 'Appian', 'an optional tech label', 'an optional description')
@enduml
```

