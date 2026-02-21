# Theguardian


```text
simpleicons-14/T/Theguardian
```

```text
include('simpleicons-14/T/Theguardian')
```



| Illustration | Theguardian |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Theguardian.png) | ![illustration for Theguardian](../../simpleicons-14/T/Theguardian.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TheguardianXs>`
- `<$TheguardianSm>`
- `<$TheguardianMd>`
- `<$TheguardianLg>`





## Theguardian

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Theguardian
include('simpleicons-14/T/Theguardian')

' renders the element
Theguardian('Theguardian', 'Theguardian', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Theguardian
include('simpleicons-14/T/Theguardian')

' renders the element
Theguardian('Theguardian', 'Theguardian', 'an optional tech label', 'an optional description')
@enduml
```

