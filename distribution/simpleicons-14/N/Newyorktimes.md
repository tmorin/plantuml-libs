# Newyorktimes


```text
simpleicons-14/N/Newyorktimes
```

```text
include('simpleicons-14/N/Newyorktimes')
```



| Illustration | Newyorktimes |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/N/Newyorktimes.png) | ![illustration for Newyorktimes](../../simpleicons-14/N/Newyorktimes.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NewyorktimesXs>`
- `<$NewyorktimesSm>`
- `<$NewyorktimesMd>`
- `<$NewyorktimesLg>`





## Newyorktimes

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Newyorktimes
include('simpleicons-14/N/Newyorktimes')

' renders the element
Newyorktimes('Newyorktimes', 'Newyorktimes', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Newyorktimes
include('simpleicons-14/N/Newyorktimes')

' renders the element
Newyorktimes('Newyorktimes', 'Newyorktimes', 'an optional tech label', 'an optional description')
@enduml
```

