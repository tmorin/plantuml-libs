# Undertale


```text
simpleicons-8/U/Undertale
```

```text
include('simpleicons-8/U/Undertale')
```



| Illustration | Undertale |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/U/Undertale.png) | ![illustration for Undertale](../../simpleicons-8/U/Undertale.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UndertaleXs>`
- `<$UndertaleSm>`
- `<$UndertaleMd>`
- `<$UndertaleLg>`





## Undertale

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Undertale
include('simpleicons-8/U/Undertale')

' renders the element
Undertale('Undertale', 'Undertale', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Undertale
include('simpleicons-8/U/Undertale')

' renders the element
Undertale('Undertale', 'Undertale', 'an optional tech label', 'an optional description')
@enduml
```

