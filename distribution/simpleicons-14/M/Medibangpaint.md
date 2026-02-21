# Medibangpaint


```text
simpleicons-14/M/Medibangpaint
```

```text
include('simpleicons-14/M/Medibangpaint')
```



| Illustration | Medibangpaint |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Medibangpaint.png) | ![illustration for Medibangpaint](../../simpleicons-14/M/Medibangpaint.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MedibangpaintXs>`
- `<$MedibangpaintSm>`
- `<$MedibangpaintMd>`
- `<$MedibangpaintLg>`





## Medibangpaint

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Medibangpaint
include('simpleicons-14/M/Medibangpaint')

' renders the element
Medibangpaint('Medibangpaint', 'Medibangpaint', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Medibangpaint
include('simpleicons-14/M/Medibangpaint')

' renders the element
Medibangpaint('Medibangpaint', 'Medibangpaint', 'an optional tech label', 'an optional description')
@enduml
```

