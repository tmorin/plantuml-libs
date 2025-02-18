# Starbucks


```text
simpleicons-14/S/Starbucks
```

```text
include('simpleicons-14/S/Starbucks')
```



| Illustration | Starbucks |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Starbucks.png) | ![illustration for Starbucks](../../simpleicons-14/S/Starbucks.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StarbucksXs>`
- `<$StarbucksSm>`
- `<$StarbucksMd>`
- `<$StarbucksLg>`





## Starbucks

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Starbucks
include('simpleicons-14/S/Starbucks')

' renders the element
Starbucks('Starbucks', 'Starbucks', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Starbucks
include('simpleicons-14/S/Starbucks')

' renders the element
Starbucks('Starbucks', 'Starbucks', 'an optional tech label', 'an optional description')
@enduml
```

