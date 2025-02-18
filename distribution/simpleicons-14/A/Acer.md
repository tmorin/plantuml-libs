# Acer


```text
simpleicons-14/A/Acer
```

```text
include('simpleicons-14/A/Acer')
```



| Illustration | Acer |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Acer.png) | ![illustration for Acer](../../simpleicons-14/A/Acer.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AcerXs>`
- `<$AcerSm>`
- `<$AcerMd>`
- `<$AcerLg>`





## Acer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Acer
include('simpleicons-14/A/Acer')

' renders the element
Acer('Acer', 'Acer', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Acer
include('simpleicons-14/A/Acer')

' renders the element
Acer('Acer', 'Acer', 'an optional tech label', 'an optional description')
@enduml
```

