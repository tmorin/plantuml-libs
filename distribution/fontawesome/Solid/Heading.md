# Heading


```text
fontawesome/Solid/Heading
```

```text
include('fontawesome/Solid/Heading')
```



| Illustration | Heading |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Heading.png) | ![illustration for Heading](../../fontawesome/Solid/Heading.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HeadingXs>`
- `<$HeadingSm>`
- `<$HeadingMd>`
- `<$HeadingLg>`





## Heading

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Heading
include('fontawesome/Solid/Heading')

' renders the element
Heading('Heading', 'Heading', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Heading
include('fontawesome/Solid/Heading')

' renders the element
Heading('Heading', 'Heading', 'an optional tech label', 'an optional description')
@enduml
```

