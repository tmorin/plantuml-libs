# Jovian


```text
simpleicons-14/J/Jovian
```

```text
include('simpleicons-14/J/Jovian')
```



| Illustration | Jovian |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/J/Jovian.png) | ![illustration for Jovian](../../simpleicons-14/J/Jovian.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$JovianXs>`
- `<$JovianSm>`
- `<$JovianMd>`
- `<$JovianLg>`





## Jovian

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Jovian
include('simpleicons-14/J/Jovian')

' renders the element
Jovian('Jovian', 'Jovian', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Jovian
include('simpleicons-14/J/Jovian')

' renders the element
Jovian('Jovian', 'Jovian', 'an optional tech label', 'an optional description')
@enduml
```

